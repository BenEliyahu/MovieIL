import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import Title from "../../components/Shared/Title";
import { Navigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { useStore } from "../../stored";
import { useSearchParams } from "../../hook/useSearchParams";
import "./LoginPage.css";

const LoginPage = () => {
  const { user, loading } = useStore((state) => state);

  const searchParams = useSearchParams();

  if (user) return <Navigate to={searchParams.get("redirect") || "/"} />;

  return (
    <div className="login-page">
      <Title title={"Sign In"} />
      <LoginForm />
      <video id='video_bg' className='' autoPlay loop muted>
      <source src={require('./video.mp4')} type="video/mp4" />
    </video>
      {loading && <Loading />}
    </div>
    
  );
};

export default LoginPage;
