import { Label } from './Label';

interface Props {
  id: string
  name: string
  label: string
  type: 'text' | 'email'
  value: string
  placeholder?: string
  required?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputField: React.FC<Props> = ({ id, name, label, type, value, placeholder, required, onChange }) => (
  <div className='flex flex-col gap-2'>
    <Label htmlFor={id}>{label}</Label>
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      className='bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-blue-400/50 focus:bg-white/10 focus:outline-none transition-all w-full'
    />
  </div>
);
