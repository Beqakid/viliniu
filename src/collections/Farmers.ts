import { CollectionConfig } from 'payload/types';

export const Farmers: CollectionConfig = {
  slug: 'farmers',
  auth: {
    useAPIKey: true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'profilePicture',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'bio',
      type: 'textarea',
    },
    {
      name: 'store',
      type: 'relationship',
      relationTo: 'stores',
      hasMany: false,
    },
    {
      name: 'website',
      type: 'relationship',
      relationTo: 'websites',
      hasMany: false,
    },
    {
      name: 'stripeAccountId',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'isStripeConnected',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        readOnly: true,
      },
    },
  ],
  hooks: {
    beforeChange: [
      async ({ req, data }) => {
        // Add any data transformation or validation here
        return data;
      },
    ],
  },
  access: {
    read: () => true,
    create: () => true,
    update: ({ req: { user } }) => {
      if (!user) return false;
      if (user.collection === 'farmers') return true;
      return false;
    },
    delete: ({ req: { user } }) => {
      if (!user) return false;
      if (user.collection === 'farmers') return true;
      return false;
    },
  },
};