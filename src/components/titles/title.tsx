export interface TitleProps {
    text1: string
    text2: string
    text3: string
    color?: string
  }
  
  export default function Title({ text1, text2, text3, color="#f7c50f" }: TitleProps) {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="flex">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span key={i} className="text-white text-2xl">
                  ·
                </span>
              ))}
          </div>
          <div className="flex">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span key={i} className="text-white">
                  ›
                </span>
              ))}
          </div>
        </div>
        <h1 className="text-5xl font-bold">
          {text1}
          <br />
          <span style={{ color: color }}>{text2}</span>
          <br />
          {text3}
        </h1>
      </div>
    )
  }
  
  