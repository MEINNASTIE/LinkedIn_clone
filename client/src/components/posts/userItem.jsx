import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function UserCard({user}) {
  return (
    <div>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          {user.image ? (
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={user.image}
              alt={`${user.username}'s avatar`}
            />
          ) : (
            <span className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-300">
              <FontAwesomeIcon icon={faUser} className="text-gray-500" />
            </span>
          )}
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">{user.username || 'Unknown user'}</p>

        </div>
      </div>
    </div>
  );
}

// For debugging purposes
UserCard.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    image: PropTypes.string,
  }),
};



