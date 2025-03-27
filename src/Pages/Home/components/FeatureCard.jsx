const FeatureCard = (props) => {
  return (
    <div className={props.className}>
      <img className={props.imgClassName} src={props.img} alt={props.alt} />
      <div className="flex flex-col gap-[10px]">
      <h4 className={props.h4ClassName}>{props.h4}</h4>
      <p className={props.pClassName}>{props.title}</p>
      </div>
    </div>
  )
}

export default FeatureCard
