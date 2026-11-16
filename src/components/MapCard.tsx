import { MAPS_DIR_URL, MAPS_EMBED_URL, SITE } from "@/lib/site";

/** Gerçek Google Haritalar konumu + yol tarifi butonu. */
export default function MapCard() {
  return (
    <div className="map-frame">
      <iframe
        src={MAPS_EMBED_URL}
        title={`${SITE.name} konumu — Google Haritalar`}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="map-info">
        <p className="addr">
          <b>{SITE.name}</b>
          <br />
          {SITE.addressShort}
        </p>
        <a className="btn btn-dir" href={MAPS_DIR_URL} rel="noopener" target="_blank">
          Yol Tarifi Al
        </a>
      </div>
    </div>
  );
}
