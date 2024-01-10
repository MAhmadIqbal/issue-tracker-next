'use client';

import {Button, Callout, Text, TextField} from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage  = () => {
  const [error, setError] = useState('')
  const [isSubmitting, setSubmitting] = useState(false)
  const router = useRouter()
  const {register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
  })
  console.log(register('title'));
  return (
    <div className='max-w-xl'>
      {error && <Callout.Root color='red' className='mb-5'>
        <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
    <form className=' space-y-3' onSubmit = {handleSubmit(async (data)=> {
     try {
        setSubmitting(true); 
       await axios.post('/api/issues', data);
       router.push('/issues')  
     } catch (error) {
      setSubmitting(false); 
      console.log("error>>>",error) 
      setError('An unexpected error occured.')
     }
    }
      )}> 
      <TextField.Root >
      <TextField.Slot>Title </TextField.Slot>
      <TextField.Input {...register('title')}/>
      </TextField.Root>
      {<ErrorMessage>{errors.title?.message}</ErrorMessage>}
      <Controller
        name='description'
        control={control}
        render = {({field})=> <SimpleMDE placeholder='Description' className='border-black' {...field} />}
      />
      {<ErrorMessage>{errors.description?.message}</ErrorMessage>}
      <Button disabled={isSubmitting}>Submit New Issue {isSubmitting && <Spinner/>} </Button>
      </form>
      </div>
  )
}

export default NewIssuePage