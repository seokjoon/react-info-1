import { useEffect, useState } from 'react'


function useInPromiseHook(promiseCreator, deps) {
  //실패, 대기, 완료 상태 관리
  const [err, setErr] = useState(null)
  const [load, setLoad] = useState(false)
  const [resolved, setResolved] = useState(null)

  useEffect(() => {
    const process = async () => {
      setLoad(true)
      try {
        const resolved = await promiseCreator()
        setResolved(resolved)
      } catch (e) {
        setErr(e)
      }
      setLoad(false)
    }
    process()
  }, [deps, promiseCreator])
  return [err, load, resolved]
}


export default useInPromiseHook;
