import { useForm } from 'react-hook-form';

const AddTask = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className='bg-[#3ea9e7] px-5 py-20'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col md:w-10/12 w-full mx-auto space-y-5'>
                <input className='border p-2' type="text" placeholder="Title" {...register("title", { required: true, maxLength: 100 })} />
                <textarea className='border p-2' placeholder="Description" {...register("description", { required: true, maxLength: 100 })}></textarea>
                <input className='border p-2' type="date" placeholder="Deadline" {...register("deadlines", { required: true, maxLength: 100 })} />
                <select className='border p-2' {...register("priority", { required: true })}>
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                </select>
                <input className='border bg-slate-400 cursor-pointer p-2' type="submit" />
            </form>
        </div>
    );
};

export default AddTask;