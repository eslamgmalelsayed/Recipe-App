import { ref } from 'vue'
import axios from 'axios'

export default function useFetch() {
  const data = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchData = async url => {
    try {
      loading.value = true
      const response = await axios.get(url+Math.floor(Math.random() * 9))
      data.value = response.data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { data, loading, error, fetchData }
}
