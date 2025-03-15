export interface TitleProps {
    text1: string
    text2?: string
    text3?: string
    text4?: string
    color?: string
  }
  
  export default function Title({ text1, text2, text3, text4, color="#f7c50f" }: TitleProps) {
    return (
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-bold">
          {text1}
          <br />
          <span style={{ color: color }}>{text2}</span>
          <br />
          {text3} {text4}
        </h1>
      </div>
    )
  }
  
  