import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Car } from "lucide-react"
import { toast } from "sonner"
import { api } from "@/lib/api"
import logo from "@/assets/images/logo.png"

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await api.login(credentials.username, credentials.password)
      
      localStorage.setItem('token', result.token)
      localStorage.setItem('isAdminLoggedIn', 'true')
      localStorage.setItem('adminUser', JSON.stringify(result.user))
      
      toast.success('Login successful!')
      window.location.href = '/'
    } catch (error: any) {
      toast.error(error.message || 'Login failed')
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src={logo} alt="Vismart Car Hire Logo" className="w-8 h-8" />
            <div className="text-2xl font-bold text-white">
              Vismart Car Hire
            </div>
          </div>
          <CardTitle className="text-white">Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
              <Input
                type="email"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="vismartcarhire@gmail.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Password</label>
              <Input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-red-600 hover:bg-red-700"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-400">
            Use your admin email and password
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login