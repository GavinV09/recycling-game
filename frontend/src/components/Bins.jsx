import '../App.css'

function Bin() {
  return (
    <div className="bins">
      <img src="bins/compost_bin.png" alt="Compost Bin" className="bin compost-bin"/>
      <img src="bins/recycle_bin.png" alt="Recycling Bin" className="bin recycling-bin"/>
      <img src="bins/trash_bin.png" alt="Trash Bin" className="bin trash-bin"/>
    </div>
  )
}

export default Bin;