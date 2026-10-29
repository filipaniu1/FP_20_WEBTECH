import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [photos, setPhotos] = useState([
    { id: 10, alt: "Mak", downloads: 35 },
    { id: 20, alt: "Bukiet", downloads: 43 },
    { id: 30, alt: "Dalmatyńczyk", downloads: 2 },
    { id: 340, alt: "Łabondz", downloads: 67 }
  ]);

  function download(id) {
    setPhotos((previousPhotos) =>
      previousPhotos.map((photo) => {
        if (photo.id === id) {
          return { ...photo, downloads: photo.downloads + 1 };
        }
        return photo;
      })
    );
  }

  function reset(id) {
    setPhotos((previousPhotos) =>
      previousPhotos.map((photo) => {
        if (photo.id === id) {
          return { ...photo, downloads: photo.downloads = 0 };
        }
        return photo;
      })
    );
  }


  return (
    <div>
      <h1>Galeria</h1>
      {photos.map((photo) => (
        <div key={photo.id}>
          <h2>{photo.alt}</h2>
          <p>Pobrania: {photo.downloads}</p>
          <button className="btn btn-primary" onClick={() => download(photo.id)}>Pobierz</button>
          <button onClick={() => reset(photo.id)}>Reset</button>
        </div>
      ))}
      <div class="container">
        <div className="form-check">
          <input class="form-check-input" type="checkbox" value="" id="checkDefault"/>
            <label class="form-check-label" for="checkDefault">
              Default checkbox
            </label>
        </div>
        <div class="row">
          <div class="col-3 px-3 fw-bold text-primary bg-light" style={{ border: '1px solid black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur erat placerat pellentesque pulvinar. Aliquam quis arcu ornare, interdum dolor hendrerit, semper tellus. Mauris lacinia risus pellentesque felis porttitor congue. Fusce sed nulla eu sem bibendum ullamcorper vel nec diam.</div>
          <div class="col-3" style={{ border: '1px solid black' }}>Vestibulum molestie massa metus, non rutrum dolor euismod et. Phasellus cursus nibh lorem, non efficitur est varius in. In consectetur erat non justo porttitor, sit amet euismod est fermentum. Ut vestibulum semper porttitor. Proin egestas vitae lacus eget dignissim. In ultricies porta tortor, id pulvinar neque dignissim nec. </div>
          <div class="col-6" style={{ border: '1px solid black' }}>Aliquam auctor neque lobortis quam congue, et pretium arcu rutrum. Nam porttitor massa eget auctor consectetur. Phasellus rutrum sapien et massa tincidunt vestibulum. Donec ornare fermentum neque et ullamcorper. Donec quis lacus sed metus ullamcorper fermentum. Vestibulum quis neque vitae urna posuere sollicitudin.</div>
        </div>
        <div class="row">
          <div class="col-4" style={{ border: '1px solid black' }}>Ut a libero sapien. Fusce vel suscipit ligula. Donec porta molestie nisl sed pulvinar. Quisque iaculis interdum enim vel lacinia. Ut diam velit, molestie at ex et, sagittis venenatis ante. In porta congue nulla at ultricies. Nunc cursus sed ipsum id condimentum. Donec convallis ante vehicula diam pulvinar aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed iaculis nec diam non ornare.</div>
          <div class="col-4" style={{ border: '1px solid black' }}>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc varius tristique diam ac feugiat. Donec iaculis congue dui et egestas. Mauris vestibulum tristique lorem sed pellentesque.</div>
          <div class="col-4" style={{ border: '1px solid black' }}>Vivamus finibus odio ante, a fringilla tortor sodales eu. Sed eget nibh sit amet quam gravida euismod. Integer scelerisque metus at eros elementum tincidunt. Vestibulum cursus condimentum nunc et dictum. Nullam tristique consectetur lorem. Phasellus malesuada at neque sit amet blandit.</div>
        </div>
        <div class="row">
          <div class="col-9" style={{ border: '1px solid black' }}>Mauris laoreet nulla vitae lorem tempor tempus. Sed velit enim, sollicitudin a neque et, laoreet aliquet risus. Fusce lobortis turpis eu accumsan porta. Praesent eu enim fringilla, pulvinar erat vitae, suscipit nulla. Nullam ornare lacinia eros, varius volutpat metus. Cras laoreet hendrerit vulputate. Curabitur pretium vehicula nulla a pellentesque. Fusce dictum risus sit amet malesuada laoreet. Integer tortor ipsum, aliquam ut imperdiet a, tristique a leo.</div>
          <div class="col-3" style={{ border: '1px solid black' }}>Cras est augue, pulvinar ut ligula vel, aliquet ultrices ligula. Nunc nec rutrum ante, non aliquam dolor. Morbi faucibus, nisi in ultrices vestibulum, nulla turpis auctor quam, a sodales ex metus in tellus. Duis semper vehicula venenatis.</div>
          <div class="col-12 col-md-6 col-lg-4" style={{ border: '1px solid black' }}>kurs</div>
        </div>
      </div>
    </div>
  );
}

export default App;