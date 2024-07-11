// app/reference/page.js
'use client'

import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'

export default function Reference() {
  return (
    <ApiReferenceReact
      configuration={{
        spec: {
          url: '/eth-labels-api.json',
        },
        metaData: {
          title: 'WalletLabels API',
          description: 'API reference for walletlabels on ethereum',
        },
        hideDownloadButton: true,
        theme: 'purple',
      }}
    />
  )
}
