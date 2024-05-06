import SignIn from "@/app/signin/signin.tsx";
import BasicTable from "./contacts/page";
import UsersForm from "./users/page";

export default function Home(isLoggedIn: boolean) {
  let content = <SignIn />;
  return (
    <div className="grid content-start md:content-around">
      {content}
    </div>
  );
}
