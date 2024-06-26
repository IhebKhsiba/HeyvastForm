const AuthLayout = ({
  children

}: {
  children: React.ReactNode
}) => {
  return (
      <div className="h-full flex items-center justify-center bg-gradient-to-b from-purple-600 to-blue-100">
          {children}
      </div>
  )
}

export default AuthLayout