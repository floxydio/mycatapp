import React from 'react'

const Spacing: React.FC<{ marginBottom: string }> = ({ marginBottom }) => {
   return (
      <div style={{ marginBottom: marginBottom }}></div>
   )
}

export default Spacing
