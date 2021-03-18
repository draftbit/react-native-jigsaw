import*as t from"react";const n=n=>{const[e,s]=t.useState(),[r,a]=t.useState(n.currentUser);return t.useEffect(()=>{const t=n.onAuthStateChanged(a,s);return()=>{t()}},[n]),[r,e,(t,e)=>{n.signInWithEmailAndPassword(t,e).then(a).catch(s)},()=>n.signOut(),(t,e)=>{n.signInWithEmailAndPassword(t,e).then(a).catch(s)}]};export{n as useAuthState};
//# sourceMappingURL=index.modern.js.map
