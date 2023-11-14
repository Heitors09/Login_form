const database = supabase.createClient('https://dxtjhgyszopvxrivleou.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4dGpoZ3lzem9wdnhyaXZsZW91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5ODUwMTEsImV4cCI6MjAxNTU2MTAxMX0.7deQ2mzvAW60eWHyTAJ4BHdj_bvRPflIPMfpByZ5uso')


const button = document.querySelector(".login")
const email = document.getElementById("email")
const password = document.getElementById("password")

button.addEventListener('click',receiveUser)


async function receiveUser(){
    const {error} = await database.from('loginkeys').insert({email: email.value, password: password.value})
    console.log({error})
    
    const {data} = await database
    .from('loginkeys')
    .select('email', 'password')
    console.log({data})
}

