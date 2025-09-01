// components/RichTextContent.tsx
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from './PortableTextComponents'

interface RichTextContentProps {
  value: any[]
}

export function RichTextContent({ value }: RichTextContentProps) {
  return (
    <div className="prose max-w-none">
      <PortableText value={value} components={portableTextComponents} />
    </div>
  )
}