import "./tag.scss";

export interface TagProps {
  text: string;
}

export function Tag({ text }: TagProps) {
  return <div className="tag">{text}</div>;
}
