import { Link } from '@remix-run/react';

const person = {
  name:'Hamza Chetoui',
  email:'hey@chetoui.dev',
  imageUrl:'/profile.jpg',
  role:'Engineer / Developer / Designer in Algeria'
}
export default function Profile() {
  return (
  <div className="pb-2 flex border-b border-zinc-300 min-w-560">
    <div className="grow mr-6 overflow-hidden flex-col">
      <h5 className="mt-1 font-normal text-xl text-zinc-700">{person.name}</h5>
      <p className="text-sm font-light truncate text-zinc-600">{person.role}</p>
      {/* <p className="mt-1 text-sm text-slate-500 truncate"><Link to={`mailto:${person.email}`}>{person.email}</Link></p> */}
    </div>
    <div className="">
      <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="hamza chetoui" />
    </div>
  </div>
  );
}