import { CircularProgress } from "sanity";

const Loading = () => {
    return (
      <div role='status'>
        <p className='text-center text-lg animate-pulse text-accent'>
          <CircularProgress value={0} />
        </p>
      </div>
    );
  };
  
  export default Loading;