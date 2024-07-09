// app/reference/route.js
import { ApiReference } from '@scalar/nextjs-api-reference'
import {} from "@scalar/themes"

const config = {
  hideDownloadButton: true,
  spec: {
    url: '/eth-labels-api.json',
  },
  metaData: {
    title: 'WalletLabels API',
    description: 'API refrence for walletlabels on ethereum',
  },
  theme: 'purple' as const,
}

export const GET = ApiReference(config)