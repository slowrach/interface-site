import "./App.css"
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import headerImg from "./assets/icon-header.jpg"

type FormData = {
   name: string
   lastName: string
   email: string
   mentor: string
   feedback?: string
   date?: string
   start?: string
   end?: string
   check?: boolean
}

const schema = yup.object({
   name: yup.string().required("Digite um nome"),
   lastName: yup.string().required("Digite seu sobrenome"),
   email: yup.string().email().required(),
   mentor: yup.string().required(),
   feedback: yup.string(),
   date: yup.string(),
   start: yup.string(),
   end: yup.string(),
   check: yup.boolean()
})

export function App() {
   const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
      defaultValues: {
         name: "",
         lastName: "",
         email: "",
         mentor: "",
         feedback: "",
         date: "",
         start: "",
         end: "",
         check: false
      },
      resolver: yupResolver(schema),
   })

   const day = new Date().getDate().toString().padStart(2, "0")
   const month = (new Date().getMonth() + 1).toString().padStart(2, "0")
   const year = new Date().getFullYear()

   const today = `${year}-${month}-${day}`

   function submit(data: FormData){
      console.log(data)
   }

  return (
    <div className="container">
      <header>
         <h1>Avalie a sua mentoria</h1>

         <p>Chegou a hora de avaliar o seu mentor. Bora lá?</p>

         <img src={headerImg} alt="imagem decorativa no cabeçalho"></img>

         <h2>Informações pessoais</h2>
      </header>

      <form onSubmit={handleSubmit(submit)}>
         <fieldset>
            <div className="full-name">
               <div>
                  <h3>Nome</h3>

                  <Controller control={control} name="name" render={({ field }) => (<input type="text" {...field}/>)} />

                  {errors.name?.message && <h4 className="error">Nome é obrigatório</h4>}
               </div>
               <div>
                  <h3>Sobrenome</h3>
                  
                  <Controller control={control} name="lastName" render={({ field }) => (<input type="text" {...field}/>)} />

                  {errors.lastName?.message && <h4 className="error">Sobrenome é obrigatório</h4>}
               </div>
            </div>

            <div className="email-data">
               <h3>E-mail <span>(Digite um email válido)</span></h3>

               <Controller control={control} name="email" render={({ field }) => (<input type="email" {...field}/>)} />

               {errors.email?.message && <h4 className="error">E-mail é obrigatório</h4>}
            </div>
         </fieldset>
            
         <fieldset>
            <div>
               <legend>Informações do mentor</legend>
               <div className="mentor-name">
                  <h3>Selecione quem foi o seu mentor</h3>

                  <Controller control={control} name="mentor" render={({ field }) => (
                     <select {...field}>
                        <option value="" disabled>...</option>

                        <option value=" Mark Knopfler">Mark Knopfler</option>
                        <option value="Eric Clapton">Eric Clapton</option>
                        <option value="Gary Moore">Gary Moore</option>
                        <option value="David Gilmour">David Gilmour</option>
                        <option value="Jeff Beck">Jeff Beck</option>
                        <option value="Stevie Ray Vaughan">Stevie Ray Vaughan</option>
                     </select>
                  )} />

                  {errors.mentor?.message && <h4 className="error">Selecione o mentor</h4>}
               </div>

               <div className="mentor-feedback">
                  <h3>Feedback sobre o mentor</h3>

                  <Controller control={control} name="feedback" render={({ field }) => (<textarea {...field}/>)} />
               </div>

               <div className="checkbox">
                  <Controller control={control} name="check" render={({ field }) => (<input type="checkbox" {...field}  value=""/>
  )} />

                  <h3>Todas as minhas dúvidas foram esclarecidas durante a mentoria</h3>
               </div>
            </div>
         </fieldset>

         <fieldset>
            <legend>Agendando próxima mentoria</legend>

            <div className="scheduling">
               <div className="date">
                  <h3>Data <span>(DD/MM/AAAA)</span></h3>

                  <Controller control={control} name="date" render={({ field }) => (<input type="date" min={today}  {...field}/>)} />
               </div>

               <div className="hour">
                  <div>
                     <h3>Das</h3>

                     <Controller control={control} name="start"render={({ field }) => (<input type="time" {...field}/>)} />
                  </div>

                  <div>
                     <h3>Até</h3>

                     <Controller control={control} name="end" render={({ field }) => (<input type="time" {...field}/>)} />
                  </div>
               </div>
            </div>
         </fieldset>

         <button className="button" type="submit">
            Salvar
         </button>
      </form>
    </div>
  )
}
