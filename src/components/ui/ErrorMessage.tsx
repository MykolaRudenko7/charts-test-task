interface ErrorMessageProperties {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProperties) {
  return (
    <div className='p-8'>
      <div className='rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700'>
        {message}
      </div>
    </div>
  );
}
