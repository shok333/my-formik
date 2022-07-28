import React, { FC, useEffect } from "react";

const MyApp: FC = () => {
  useEffect(() => {
    console.log('Hello my formik')
  }, [])

  return (
    <div>123321</div>
  )
}

export default MyApp