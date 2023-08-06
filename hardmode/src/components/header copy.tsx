
export default function example() {
  return (
<nav className="">
  <div className="inner">
    <a href="/" className="router-link-active router-link-exact-active logo" aria-current="page">
      <img src="/static/enchant.png"/></a>
      <div className="items litems">
        <a href="/" className="router-link-active router-link-exact-active" aria-current="page">Enchant</a>
      <a href="/pravidla" className="">Pravidla</a>
      <a href="/wiki" className="">Wiki</a><a href="/clenove" className="">Členové</a>
</div>
      <div className="items ritems">
      <a target="_blank" href="https://discord.enchant.cz">Discord</a>
      <a target="_blank" href="https://map.enchant.cz">Mapa</a>
      <a href="/prihlaseni" className="account">
        <img src="https://api.enchant.cz/head/64/MHF_Steve"/><div className="nick">Přihlásit se</div>
      </a></div><div className="menu"><div className="feather feather-text mr-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu">
          <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line></svg></div></div></div></nav>
  )
}