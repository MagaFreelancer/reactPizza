import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="122" cy="124" r="122" /> 
    <rect x="0" y="269" rx="15" ry="15" width="254" height="28" /> 
    <rect x="-1" y="318" rx="15" ry="15" width="254" height="67" /> 
    <rect x="-1" y="407" rx="15" ry="15" width="95" height="42" /> 
    <rect x="107" y="406" rx="15" ry="15" width="146" height="42" />
  </ContentLoader>
)

export default Skeleton