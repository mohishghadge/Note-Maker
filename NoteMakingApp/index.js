const addBtn = document.querySelector("#addBtn");

const main = document.querySelector("#main");


const saveNotes = () =>{
    const notes = document.querySelectorAll(".note");
    // console.log(notes)
    const data = [];
    notes.forEach(
      (note) =>{
        const title = note.querySelector("textarea[name='Heading']").value;
        const content = note.querySelector("textarea:not([name='Heading'])").value;    
        data.push({title,content}); 
      }
    )   
    if(data.length === 0){
      localStorage.removeItem("notes");
    }
    else{
      localStorage.setItem("notes",JSON.stringify(data))
    }
}

//onClick addbutton event
addBtn.addEventListener("click",function(){
  addNote();
})



//onClick addbutton

const addNote = (text="",title = "")=>{
        const note = document.createElement("div");
        note.classList.add("note");
        note.innerHTML = 
        `  
        <div class="tool">
       <textarea placeholder="Title" name="Heading" id="heading">${title}</textarea>

      <i id="save" class="fa-regular fa-floppy-disk fa-lg" style="color: #ffffff;"></i>
      <i id ="trash" class="fa-solid fa-trash-can fa-lg" style="color: #ffffff;"></i>
    </div>
    <textarea name="" id="">${text}</textarea>
    `;

    //For autoSave.
    note.querySelector("textarea").addEventListener("focusout",function(){
      saveNotes();  
    })

    //On click of delete
    note.querySelector("#trash").addEventListener("click",
      function(){
        note.classList.add("to-bottom");
        note.addEventListener("animationend",function(){
          note.remove();
          //Callig saveNotes button to save after delete
          saveNotes()
          

        });
    })

    // onclick save the note
    note.querySelector("#save").addEventListener("click",
      function(){
          saveNotes();
    })      
    main.appendChild(note);
    saveNotes();
 
}


//If all the notes gets deleted then after refresh atleast on blank note should be visible.

(function(){
  const lsnotes = JSON.parse(localStorage.getItem("notes")); //JSON.parse convert the string to object so we can loop it 
  console.log(lsnotes)
  if(lsnotes === null){
    addNote();
   
  }else{
    lsnotes.forEach(lsnotes => {
      addNote(lsnotes.content,lsnotes.title);
  })
  }

})();

