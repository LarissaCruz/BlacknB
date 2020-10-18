import React from 'react';
const StartRating  = () =>{
    return(
      <div>
        {[...Array(5)].map(star =>{
          return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M15.956 5.744a.8.8 0 00-.695-.54l-4.56-.363L8.728.473A.798.798 0 007.27.472L5.297 4.84l-4.56.362a.8.8 0 00-.495 1.37l3.37 3.286-1.192 5.16a.8.8 0 001.224.846l4.355-2.904 4.355 2.904a.8.8 0 001.214-.885l-1.463-5.119 3.628-3.265a.801.801 0 00.223-.852z" fill="rgb(191, 133, 20)"></path></svg>
          );
        })}
      </div>
    );
  };
export default StartRating;