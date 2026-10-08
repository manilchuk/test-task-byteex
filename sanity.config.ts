import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';
import { ApproveReviewAction } from './sanity/actions/ApproveReviewAction';

export default defineConfig({
  name: 'default',
  title: 'Byteex',

  projectId: 'brininzy',
  dataset: 'production',

  basePath: '/studio',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev, context) => {
      if (context.schemaType === 'reviewSubmission') {
        return [ApproveReviewAction, ...prev];
      }
      return prev;
    },
  },
});
