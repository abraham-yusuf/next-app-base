export async function getStaticProps(context) {
  return {
    redirect: {
      destination: "/sign-up",
    },
  };
}

export default function SignUp() {
  return <></>;
}
