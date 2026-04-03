import './Header.css'


// Enable email copying.
async function copy(btn) {
  await navigator.clipboard.writeText(btn.dataset.copy);
  btn.textContent = "Copied!";
  setTimeout(() => btn.textContent = "Copy", 2000);
}

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <a href="mailto:that.kimani@gmail.com" className="email">that.kimani@gmail.com</a>
            <div className="header-links">
              <button 
              data-copy="that.kimani@gmail.com" 
              className='header-btn'
              onClick={(e) => copy(e.currentTarget)}
              >
                Copy
              </button>
            </div>
          </div>
          <div className="header-right">
            <a href="https://www.linkedin.com/in/wayne-kimani/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://medium.com/@that.kimani" target="_blank" rel="noopener noreferrer">Medium</a>
            <a href="https://github.com/that-kimani" target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        </div>
      </div>
    </header>
  )
}