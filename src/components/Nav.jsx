import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faShopify } from '@fortawesome/free-brands-svg-icons';

const Nav = () => {
  return (
    <div>
      <div className="flex items-center justify-between bg-pink-50 py-1">
        <div className="flex items-center pl-5">
          <img
            src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/06d8383c309c84912640537529a0c4d4"
            alt="icon"
            className="rounded-full w-12 h-auto"
          />
        </div>

        <div className="px-3">
          <a href="https://www.shopify.com/fr" target="_blank" title='Shopify.com'>
            <FontAwesomeIcon
              icon={faShopify}
              className="text-[green] text-3xl px-2"
            />
          </a>

          <a href="#" title="Eloïne DA SILVA">
            <FontAwesomeIcon
              icon={faCircleUser}
              className="text-pink-500 text-3xl px-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Nav;
