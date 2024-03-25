import { useAppDispatch, useAppSelector } from "@/redux/hook/redux.hook"
import { setChangeTheme } from "@/redux/slices/optionsSlice"

const useCurrentTheme = () => {
  const dispatch = useAppDispatch()
  const themeData = useAppSelector((state) => state.optionsSlice.rootOptions)

  const changeTheme = (nameTheme: string) => {
    dispatch(setChangeTheme(nameTheme))
  }

  return {
    changeTheme,
    themeData
  }
}

export { useCurrentTheme }