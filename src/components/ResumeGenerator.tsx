import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Loader2 } from 'lucide-react'
import { postRequest } from "@/utils/apis"
import { useNavigate } from 'react-router-dom';


interface ResumeGeneratorProps {
  jobId: string;
}

export default function ResumeGenerator({jobId }: ResumeGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const navigate = useNavigate();

  const handleGenerateResume = async () => {
    setIsGenerating(true)
    const url = `${import.meta.env.VITE_API_URL}/generate_resume/`;
    const userId = "5e34654eb6ca471282b67db911152041";
    const data = {user_id: userId, job_id: jobId}
    try {
      const response = await postRequest(url, data)
      console.log(response)
      if (response.ok) {

        const resume = await response.json()
        console.log(resume)
        sessionStorage.setItem("currentResume", resume)
        navigate('/resume', {state: {"resume": resume}})
      } else {
       const error = await response.json()
        console.log(error)
      }
    } catch (error) {
      console.log(error);
    }
    // Simulate resume generation
    setTimeout(() => {
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <Button onClick={handleGenerateResume} disabled={isGenerating}>
      {isGenerating ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        'Generate Resume'
      )}
    </Button>
  )
}

