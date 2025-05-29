import "./App.css"

export function App() {
  return (
    <div className="container">
      <header>
         <h1>Avalie a sua mentoria</h1>

         <p>Chegou a hora de avaliar o seu mentor. Bora lá?</p>

         <img src="src/assets/icon-header.jpg" alt="imagem decorativa no cabeçalho"></img>

         <h2>Informações pessoais</h2>
      </header>

      <form>
         <fieldset>
            <div className="full-name">
               <div>
                  <h3>Nome</h3>
                  <input type="text" required></input>
               </div>
               <div>
                  <h3>Sobrenome</h3>
                  <input type="text" required></input>
               </div>
            </div>

            <div className="email-data">
               <h3>E-mail <span>(Digite um email válido)</span></h3>
               <input type="email" required></input>
            </div>
         </fieldset>
            
         <fieldset>
            <div>
               <legend>Informações do mentor</legend>
               <div className="mentor-name">
                  <h3>Selecione quem foi o seu mentor</h3>

                  <select>
                     <option value="guitarist1">Mark Knopfler</option>
                     <option value="guitarist2">Eric Clapton</option>
                     <option value="guitarist3">Gary Moore</option>
                     <option value="guitarist4">David Gilmour</option>
                     <option value="guitarist5">Jeff Beck</option>
                     <option value="guitarist6">Stevie Ray Vaughan</option>
                  </select>
               </div>

               <div className="mentor-feedback">
                  <h3>Feedback sobre o mentor</h3>

                  <textarea></textarea>
               </div>

               <div className="checkbox">
                  <input type="checkbox" ></input>

                  <h3>Todas as minhas dúvidas foram esclarecidas durante a mentoria</h3>
               </div>
            </div>
         </fieldset>

         <fieldset>
            <legend>Agendando próxima mentoria</legend>

            <div className="scheduling">
               <div className="date">
                  <h3>Data <span>(DD/MM/AAAA)</span></h3>

                  <input type="date"></input>
               </div>

               <div className="hour">
                  <div>
                     <h3>Das</h3>
                     <input type="time"></input>
                  </div>
                  <div>
                     <h3>Até</h3>
                     <input type="time"></input>
                  </div>
               </div>
            </div>
         </fieldset>

         <button className="button" type="button">
            Salvar
         </button>
      </form>
    </div>
  )
}
