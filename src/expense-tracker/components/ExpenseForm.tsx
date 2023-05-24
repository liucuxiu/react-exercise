import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import categories from '../../categories';

interface Props {
  onSubmit: (expense: ExpenseFormData) => void
}

const schema = z.object({
  description: z.string().min(1).max(100),
  amount: z.number().min(0.01).max(100_000),
  category: z.enum(categories, {
    errorMap: (error) => {
      return { message: 'Please select a category' }
    }
  })
})
type ExpenseFormData = z.infer<typeof schema>

const ExpenseForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) })
  return (
    <form onSubmit={handleSubmit(data => {
      onSubmit(data)
      reset()
    })}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input {...register('description')}
               type="text" className="form-control" id="description"/>
        {errors.description && <div className="text-danger">{errors.description.message}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input {...register('amount', { valueAsNumber: true })}
               type="number" className="form-control" id="amount"/>
        {errors.amount && <div className="text-danger">{errors.amount.message}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
        <select {...register('category')}
                className="form-select" id="category">
          {categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
        {errors.category && <div className="text-danger">{errors.category.message}</div>}
      </div>
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  )
}

export default ExpenseForm;