import { log } from 'console'
import { useRouter } from 'next/router'
import React from 'react'

export function FormChoices() {
  const router = useRouter()

  const generateSlug = (titleLeft: string, titleRight: string): string => {
    const baseSlug = `${titleLeft}-${titleRight}`
    return baseSlug
      .toLowerCase()
      .replace(/[\s_]+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/^-+|-+$/g, '')
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const titleLeft = formData.get('title-left') as string
    const titleRight = formData.get('title-right') as string

    const slug = generateSlug(titleLeft, titleRight)
    formData.append('slug', slug) // Ajoute le slug au formData

    // Envoie les données, y compris le slug, à l'API
    const response = await fetch('/api/saveChoices', {
      method: 'POST',
      body: formData,
    })

    if (response.ok) {
      router.push(`/questions/${slug}`)
    } else {
      alert('Une erreur est survenue lors de la soumission du formulaire.')
    }
  }

  return (
    <div className="m-auto bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
      <h1 className="font-bold mb-3">Ajouter votre propre vote :</h1>
      <form onSubmit={handleSubmit} action="#" method="POST" encType="multipart/form-data" className="space-y-4">
        <div>
          <label htmlFor="title-left" className="block text-sm font-medium text-gray-700">
            Titre gauche
          </label>
          <input
            type="text"
            name="title-left"
            id="title-left"
            required
            className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="image-left" className="block text-sm font-medium text-gray-700">
            Image de gauche
          </label>
          <input
            type="file"
            name="image-left"
            id="image-left"
            required
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="title-right" className="block text-sm font-medium text-gray-700">
            Titre droite
          </label>
          <input
            type="text"
            name="title-right"
            id="title-right"
            required
            className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="image-right" className="block text-sm font-medium text-gray-700">
            Image de droite
          </label>
          <input
            type="file"
            name="image-right"
            id="image-right"
            required
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Soumettre
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormChoices
