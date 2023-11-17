import React from 'react'

const TextArea = React.forwardRef((props,ref) => {
  return (
    <div className="relative mb-6" data-te-input-wrapper-init="">
      <textarea
      ref={ref}
        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleFormControlTextarea1"
        rows={3}
        placeholder="Your message"
        defaultValue={""}
      />
      <label
        htmlFor="exampleFormControlTextarea1"
        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-[#CBA664] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-[#CBA664]"
      >
        Message
      </label>
    </div>
  )
})
export default TextArea;
