import { buildConfig } from 'payload/config';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';
import { stripePlugin } from '@payloadcms/plugin-stripe';

// Import collections
import { Farmers } from './collections/Farmers';
import { Media } from './collections/Media';
import { Stores } from './collections/Stores';
import { Products } from './collections/Products';
import { Orders } from './collections/Orders';
import { Payments } from './collections/Payments';
import { Payroll } from './collections/Payroll';
import { Websites } from './collections/Websites';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
  admin: {
    user: 'farmers',
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    Farmers,
    Media,
    Stores,
    Products,
    Orders,
    Payments,
    Payroll,
    Websites,
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URI,
    },
  }),
  plugins: [
    stripePlugin({
      stripeSecretKey: process.env.STRIPE_SECRET_KEY || '',
      webhookEndpoint: '/api/stripe/webhook',
      webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    }),
    cloudStorage({
      collections: {
        'media': {
          adapter: s3Adapter({
            config: {
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
              },
              region: process.env.S3_REGION,
              bucket: process.env.S3_BUCKET,
            },
          }),
        },
        'products': {
          adapter: s3Adapter({
            config: {
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
              },
              region: process.env.S3_REGION,
              bucket: process.env.S3_BUCKET,
            },
          }),
        },
      },
    }),
  ],
  typescript: {
    outputFile: 'src/payload-types.ts',
  },
  graphQL: {
    schemaOutputFile: 'src/generated-schema.graphql',
  },
});