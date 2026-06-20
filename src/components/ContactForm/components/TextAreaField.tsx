import { Label } from './Label';

interface Props {
  id: string
  name: string
  label: string
  value: string
  placeholder?: string
  required?: boolean
  rows?: number
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const TextAreaField: React.FC<Props> = ({ id, name, label, value, placeholder, required, rows = 5, onChange }) => (
  <div className='flex flex-col gap-2'>
    <Label htmlFor={id}>{label}</Label>
    <textarea
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      required={required}
      rows={rows}
      onChange={onChange}
      className='bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-blue-400/50 focus:bg-white/10 focus:outline-none transition-all w-full resize-none'
    />
  </div>
);
