import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './style.css'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

const pinIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

const EMPTY_LOCATIONS = []
const MAP_CENTER = [20, 0]
const MAP_ZOOM = 2

export default function MapNavigation({ locations = EMPTY_LOCATIONS }) {
  const mapRef = useRef(null)
  const mapNodeRef = useRef(null)

  useEffect(() => {
    const node = mapNodeRef.current
    if (!node) return

    const map = L.map(node).setView(MAP_CENTER, MAP_ZOOM)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map)

    locations.forEach((place) => {
      const lat = place.lat ?? place.x
      const lng = place.lng ?? place.y
      if (lat == null || lng == null) return
      const marker = L.marker([lat, lng], { icon: pinIcon }).addTo(map)
      if (place.label) marker.bindPopup(place.label)
    })

    mapRef.current = map
    requestAnimationFrame(() => map.invalidateSize())

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [locations])

  return <div ref={mapNodeRef} className="split_map_heading_map" />
}
