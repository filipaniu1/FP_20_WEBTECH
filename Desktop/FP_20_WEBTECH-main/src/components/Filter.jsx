import React, { useState } from 'react';

const initialPhotos = [
  { id: 1, alt: "Mak", filename: "obraz1.jpg", category: 1, downloads: 35 },
  { id: 2, alt: "Róża", filename: "obraz2.jpg", category: 1, downloads: 120 },
  { id: 3, alt: "Pies", filename: "obraz3.jpg", category: 2, downloads: 85 },
  { id: 4, alt: "Kot", filename: "obraz4.jpg", category: 2, downloads: 150 },
  { id: 5, alt: "Sportowe auto", filename: "obraz5.jpg", category: 3, downloads: 210 },
  { id: 6, alt: "Klasyk", filename: "obraz6.jpg", category: 3, downloads: 45 }
];

export default function Filter() {
  const [photos, setPhotos] = useState(initialPhotos);

  const [showFlowers, setShowFlowers] = useState(true);
  const [showAnimals, setShowAnimals] = useState(true);
  const [showCars, setShowCars] = useState(true);

  const filteredPhotos = photos.filter((photo) => {
    return (
      (photo.category === 1 && showFlowers) ||
      (photo.category === 2 && showAnimals) ||
      (photo.category === 3 && showCars)
    );
  });

  return (
    <div className="container my-4">
      <h2 className="mb-4">Galeria Zdjęć</h2>

      <div className="mb-4">
        <div className="form-check form-switch form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flowers"
            checked={showFlowers}
            onChange={(event) => setShowFlowers(event.target.checked)}
          />
          <label className="form-check-label" htmlFor="flowers">
            Kwiaty
          </label>
        </div>

        <div className="form-check form-switch form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="animals"
            checked={showAnimals}
            onChange={(event) => setShowAnimals(event.target.checked)}
          />
          <label className="form-check-label" htmlFor="animals">
            Zwierzęta
          </label>
        </div>

        <div className="form-check form-switch form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="cars"
            checked={showCars}
            onChange={(event) => setShowCars(event.target.checked)}
          />
          <label className="form-check-label" htmlFor="cars">
            Samochody
          </label>
        </div>
      </div>

      <div className="row">
        {filteredPhotos.length > 0 ? (
          filteredPhotos.map((photo) => (
            <div key={photo.id} className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{photo.alt}</h5>
                  <p className="card-text text-muted">Pobrania: {photo.downloads}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-info">Brak zdjęć do wyświetlenia. Zaznacz co najmniej jedną kategorię.</div>
          </div>
        )}
      </div>
    </div>
  );
}