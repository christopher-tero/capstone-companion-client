import React from 'react'

export default function Goals(props) {
  const allItems = props.items
  console.log(allItems)
  if (allItems !== {}) {
    // props.items.forEach((item) => {
    //   console.log(item.project_id)
    // })
  }
  // console.log(projectGoals)

  let completed = 0;
  let setPercent = (event) => {
    let compPercent = document.getElementById("completed-percent")
    if (document.getElementById(event.target.id).checked) {
      completed += 20
      compPercent.innerText = `Completed: ${completed}%`
      console.log(completed)
    } else {
      completed -= 20
      compPercent.innerText = `Completed: ${completed}%`
      console.log(completed)
    }
  }

  return(
    <div className="goals-checklist">
      <h3>Goals Checklist</h3>
      <h4 id="completed-percent">Completed: {completed}%</h4>
      <form>
        <div><input id="1" type="checkbox" name="item-1" onClick={setPercent}/>
        <label htmlFor="item-1">Roughed out DB relationships</label></div>
        <div><input id="2" type="checkbox" name="item-2" onClick={setPercent}/>
        <label htmlFor="item-2">Wireframed web pages</label></div>
        <div><input id="3" type="checkbox" name="item-3" onClick={setPercent}/>
        <label htmlFor="item-3">Set up basic back end api</label></div>
        <div><input id="4" type="checkbox" name="item-4" onClick={setPercent}/>
        <label htmlFor="item-4">Set up basic front end client</label></div>
        <div><input id="5" type="checkbox" name="item-5" onClick={setPercent}/>
        <label htmlFor="item-5">Get fetches to api working for client</label></div>
      </form>
    </div>
  )
}

// <button className="add-checklist-item">Add Item</button>
