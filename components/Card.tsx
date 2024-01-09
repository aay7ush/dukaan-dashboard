const Card: React.FC<CardProps> = ({ title, data }) => {
  return (
    <div className="space-y-4 rounded-sm p-5 shadow-3xl">
      <p className="text-clr-secondary">{title}</p>
      <p className="text-[32px] text-clr-primary font-medium">{data}</p>
    </div>
  )
}
export default Card
