'use client'

import { useState, useEffect } from 'react'
import { ObservationList } from './ObservationList'
import { HashLoader } from 'react-spinners'
import type { ObservationType } from '@/lib/ObservationType'

interface observationMessagesProps {
  observations: ObservationType[];
}

const ObservationNew = ({ observations }: observationMessagesProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isObservation, setIsObservation] = useState('')
  const [currentObservation, setCurrentObservation] = useState<ObservationType[] >(observations);

  //console.log("OBSERVATIONS:", observations)


  // Submit message
  const onSubmit = async () => {
    setIsLoading(true)

    try {
      if (isObservation) {
        const message = isObservation
      }
    } catch (error) {
      alert(error)
    }

    setIsObservation('')
    setIsLoading(false)
  }

  useEffect(() => {
    setCurrentObservation(observations);
  }, [observations])

  useEffect(() => {
    if (isObservation !== '') {
      //onSubmit()
    }
  }, [isObservation])
 
  const handleObservation = async (observation: ObservationType) => {
    const { id, message } = observation;
    if (message !== null) {
      await setIsObservation(message)
    } else {
      await setIsObservation('')
    }
    //console.log("Observation clicked:", observation)
  }
  
  const onObservationClicked = async (observation: ObservationType, callback: () => void) => {
    await handleObservation(observation)
    callback()
  }

  return (
    <div className="relative w-full flex-col justify-center justify-items-center items-center bg-gray-50 bg-opacity-5 rounded-2xl backdrop-blur-xl drop-shadow-xl shadow shadow-indigo-500/70 px-2 pt-2 pb-3 mt-[9rem]">
      {currentObservation.length > 0 && (
        <div className="flex flex-col items-start justify-start px-2 pt-2 pb-1 text-[16px] text-left text-white font-sans font-bold">
          My Observations
        </div>
      )}
      <div className="flex items-center justify-center mb-1">
        {isLoading ? 
          <HashLoader color={'#36d7b7'} />
         : 
          <ObservationList OBSERVATIONS={currentObservation ?? [] }
            onObservationClicked={(observation) =>
              onObservationClicked(observation, () => handleObservation(observation))
            }
          />
        }
      </div>

    </div>
  )
}


export default ObservationNew