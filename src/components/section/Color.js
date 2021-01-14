import React from 'react'

function Color({ item }) {
   return (
      <div className="colors">
         {item.color.map((color, index) =>
            <button className="color_btn" key={index} style={{ background: color }}></button>
         )}
      </div>
   )
}

export default Color;