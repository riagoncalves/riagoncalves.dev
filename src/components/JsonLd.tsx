interface Props {
  data: Record<string, unknown>
}

// Escapes "<" so post content can't close the script tag early.
export const JsonLd: React.FC<Props> = ({ data }) => (
  <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
  />
);
