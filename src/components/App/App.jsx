import { useEffect, useState } from 'react'
import iziToast  from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { SearchApi } from "../search-api";
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.module.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import ImageGallery from '../ImageGallery/ImageGallery'
import ImageModal from '../ImageModal/ImageModal'
import Loader from '../Loader/Loader'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import SearchBar from '../SearchBar/SearchBar'
function App() {
  const [photos, setPhotos] = useState([])
const [loader, setLoader] = useState(false)
const [error, setError] = useState(false)
const [query, setQuery] = useState('')
const [page, setPage] = useState(1);
const [isModal, setIsModal] = useState(false)
const [selectedImage, setSelectedImage] = useState(null);
const handleSearch = (newQuery) => {
  setQuery(newQuery);
  setPage(1);
  setPhotos([])
  }
useEffect(() => {
  if (query === '') {
    return
    }
 async function getPhotos() {
try {
  setError(false);
  setLoader(true)
  const data = await SearchApi(query, page)
  {data.length === 0 ? iziToast.error({
    message: 'No images found!',
    position: 'topRight',
    title: 'Sorry',
  }) : setPhotos((PrevList) => {
return [...PrevList, ...data]
  })}
} catch (error) {
  setError(true)
}
finally{
  setLoader(false)
}
  }
getPhotos()
},[query, page])
const handleLoadMore = () => {
  setPage(page + 1);
};
const openModal = (imageUrl) => {
setSelectedImage(imageUrl)
setIsModal(true)
}
const closeModal = () => {  
  setSelectedImage(null)
setIsModal(false)
}
  return (
    <>
      <div>
        <SearchBar onSearch={handleSearch}></SearchBar>
        {photos.length > 0 && <ImageGallery onOpen={openModal} items={photos}></ImageGallery>}
        {loader &&  <Loader></Loader>}
        {error && <ErrorMessage></ErrorMessage>}
        {photos.length > 0 && !loader && <LoadMoreBtn onAdd={handleLoadMore}></LoadMoreBtn>}
        {isModal && <ImageModal selectedImage={selectedImage} onClose={closeModal}></ImageModal>}
       </div>
    </>
  )
}

export default App
